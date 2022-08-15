import { useState, useEffect, useRef } from "react"

import { buttonDisabled } from "../helpers"
import { AccordionApp } from "./AccordionApp"
import { CardsApp } from "./CardsApp"

import { MonthPreceApp, SetUpPreceApp } from "../hooks"
import { LabelSetUpCount, LabelUnderPrice } from "../ui"





export const AgentApp = () => {

    const [buttonHref, setButtonHref] = useState(null)
    const {monthCount, MonthCategory} = MonthPreceApp()
    const {setUpCount, SetUpCategory, DesinPack, PageContentWriting, refs, saveRefs, end, desingPrece } = SetUpPreceApp()
  
    const buttonPrice = useRef()


    useEffect(() => {
      if ( refs?.express !== null ) {
      // if (refs?.express !== null && refs?.first !== null ) {
        buttonDisabled(setButtonHref, refs, buttonPrice)
      }   
    }, [refs])
    
    


    return(
      <>
      <div className="elementor-container">
        <div className="container-root">
            <section id="dashboard" className="dashboardSection">
                <div className="dashboard">

                    <div className="list-zone">
                      <AccordionApp refs={refs} />  
                    </div>
                    

                    <div className="price-zone">
                      <div className='month-container'>
                        <h2 className='price' style={{fontSize:"64px"}}><span style={{fontSize:"58px"}}>$</span>{ monthCount }<span style={{fontSize:"32px"}}>/mo</span></h2>
                      </div>
                      <LabelSetUpCount setUpCount={setUpCount}/>
                      {
                        refs?.smartRef !== null && refs.smartRef.current.classList.contains('active') && <LabelUnderPrice content={'-15% off'}/>
                      }
                      <div className="price-button">
                        <a
                        ref={buttonPrice}
                        className="price-button-a disabled"
                        href={buttonHref}
                        role={'button'}
                        >
                          <span>I Want to Contact</span>
                        </a>
                      </div>
                    </div>
                </div>
            </section>
            <CardsApp SetUpCategory={SetUpCategory} MonthCategory={MonthCategory} desingPrece={desingPrece} end={end} DesinPack={DesinPack} PageContentWriting={PageContentWriting} saveRefs={saveRefs} />

            {/* <div className="price-button">
                        <a
                        ref={buttonPrice}
                        className="price-button-a disabled"
                        href={buttonHref}
                        role={'button'}
                        >
                          <span>I Want to Contact</span>
                        </a>
                      </div>

            <a
                className="start-button"
                href={"#dashboard"}
                >
                <span>Start</span>
            </a>
             */}
        </div>
      </div>
      </>
    )
}
