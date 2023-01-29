import { Image, Platform } from "react-native";
import { useEffect, useState } from "react";

const scaleWidth = async ({ source, desiredWidth } : {source: any, desiredWidth: any}) => {
  let width = 1, 
      height = 1

  if (Platform.OS === "web") {
    const a: any = await new Promise((res,rej) => {
      Image.getSize(source, (width, height) => {
        res({width, height});
    }, rej);
    })

    width = a.width
    height = a.height
  }
  else {
    width = Image.resolveAssetSource(source).width
    height = Image.resolveAssetSource(source).height
  }

  return desiredWidth / width * height
}

export default (props: {img: any, width: number, style: any}) => {

  var [actualImageHeight, setActualImageHeight] = useState(0)
  
  useEffect(() => {
    const load = async () => {
      const imageHeight = await scaleWidth({
        source: props.img,
        desiredWidth: props.width
      })
  
      setActualImageHeight(imageHeight)
    }

    load()
  },[])

  return (
    <Image source={props.img} style={{width: props.width, height: actualImageHeight, ...props.style}} />
  )
}