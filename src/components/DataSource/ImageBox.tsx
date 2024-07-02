import logo from "@Assets/images/data-nep-govt.png";
const ImageBox = (prop:{topHeading:string, midHeading?:string,bottomHeading:string}) => {
    const midHeading = prop.midHeading ? true : false;
    
  return (
    <>
        <div className="naxatw-flex naxatw-items-center lg:naxatw-mx-2 lg:naxatw-my-2 naxatw-my-4 naxatw-w-full lg:naxatw-w-auto naxatw-min-w-0 sm:naxatw-min-w-[26.25rem] lg:naxatw-min-w-0">
            <img src={logo} className="naxatw-w-8  md:naxatw-min-w-16 naxatw-aspect-square naxatw-object-contain" />
            <div className="naxatw-flex naxatw-flex-col naxatw-mx-2">
                <h3 className="naxatw-font-noto naxatw-text-black naxatw-text-xs naxa-font-bold naxatw-leading-tight">{prop.topHeading}</h3>
                <h3 className={`naxatw-font-noto naxatw-text-black naxatw-font-bold naxatw-text-xs md:naxatw-text-base lg:naxatw-leading-[0.5rem] naxatw-leading-tight naxatw-${midHeading?-"hidden" : "block"}`}>{prop.midHeading}</h3>
                <h3 className={`naxatw-font-noto naxatw-text-black  md:naxatw-text-nowrap naxatw-text-sm naxatw-leading-tight lg:naxatw-leading-${midHeading?"" : "[2px]"}`}>{prop.bottomHeading}</h3>
            </div>
        </div>
    </>
  )
}

export default ImageBox
