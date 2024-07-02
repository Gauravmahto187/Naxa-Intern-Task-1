import ImageBox from "./ImageBox"


const DataSource = () => {
  const subHeading: string = "naxatw-text-center naxatw-text-red-500 naxatw-text-xs md:naxatw-text-sm lg:naxatw-text-base naxatw-font-bold naxatw-uppercase naxatw-mt-8"

  return (
    <>
      <div className="naxatw-w-10/12 naxatw-bg-sky-100 naxatw-mx-auto naxatw-rounded-2xl naxatw-my-5 lg:naxatw-p-16 naxatw-p-6 ">

        <div className="naxatw-w-11/12 lg:naxatw-w-1/2 naxatw-mx-auto px">
          <h3 className="naxatw-text-3xl lg:naxatw-text-5xl naxatw-font-bold naxatw-text-black naxatw-text-center">Data Source</h3>
          <p className="naxatw-text-sm lg:naxatw-text-base font-normal naxatw-text-black naxatw-text-center naxatw-my-5">A digital portal to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.</p>
        </div>

        <div className="naxatw-mt-4 lg:naxatw-mt-16 naxatw-w-full naxatw-px-0 md:naxatw-px-16 naxatw-mx-auto naxatw-flex naxatw-flex-col naxatw-content-center naxatw-justify-items-center xl:naxatw-px-28">
          <h6 className={subHeading}>federal government</h6>
          <div className="naxatw-flex naxatw-items-center naxatw-justify-center">
            <div>
              <div className="naxatw-flex naxatw-items-center naxatw-flex-col lg:naxatw-flex-row lg:naxatw-px-16 min-[1550px]:naxatw-px-32 lg:naxatw-gap-6">
                <ImageBox topHeading="नेपाल सरकार" bottomHeading="अर्थ मन्त्रालय" />
                <ImageBox topHeading="Nepal Government" bottomHeading="Line Ministry Budget Information System" />
              </div>
              <div className="naxatw-flex naxatw-items-center naxatw-flex-col lg:naxatw-flex-row lg:naxatw-gap-6">
                <ImageBox topHeading="Government of Nepal" bottomHeading="Aid Management Information System of Nepal" />
                <ImageBox topHeading="नेपाल सरकार" midHeading="अर्थ मन्त्रालय" bottomHeading="महालेखा नियन्त्रक कार्यालय" />
              </div>
            </div>
          </div>
          <h6 className={subHeading}>provincial government</h6>
          <div className="naxatw-flex naxatw-items-center naxatw-justify-center">
            <div>
              <div className="naxatw-flex naxatw-items-center naxatw-flex-col lg:naxatw-flex-row lg:naxatw-px-16 min-[1550px]:naxatw-px-32 lg:naxatw-gap-6 lg:naxatw-flex-wrap xl:naxatw-flex-nowrap">
                <ImageBox topHeading="कर्णाली प्रदेश सरकार" bottomHeading="मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय" />
                <ImageBox topHeading="Province Government" bottomHeading="Provincial Line Ministry Budget Information System" />
                <ImageBox topHeading="नेपाल सरकार" midHeading="अर्थ मन्त्रालय" bottomHeading="महालेखा नियन्त्रक कार्यालय" />
              </div>
            </div>
          </div>
          <h6 className={subHeading}>municipal government</h6>
          <div className="naxatw-flex naxatw-items-center naxatw-justify-center">
            <div className="naxatw-flex naxatw-items-center naxatw-flex-col lg:naxatw-flex-row lg:naxatw-px-16 min-[1550px]:naxatw-px-32 lg:naxatw-gap-6 lg:naxatw-flex-wrap xl:naxatw-flex-nowrap">
              <ImageBox topHeading="नेपाल सरकार" bottomHeading="स्थानीय सञ्चित कोष ब्यावस्थापन प्रणाली" />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default DataSource
