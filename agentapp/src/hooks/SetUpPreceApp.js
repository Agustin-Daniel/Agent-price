import { useEffect, useState } from "react";
import { useCountUp } from 'use-count-up'





export const SetUpPreceApp = () => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [duration, setDuration] = useState(1);
    const [easing, setEasing] = useState("easeOutCubic");


    const desingPrece = {
      expressPrece: 199,
      semiPrece: 899,
      customPrece: 2499
    }
    const {expressPrece, semiPrece, customPrece} = desingPrece

    
    

    const { value, reset } = useCountUp({
      isCounting: true,
      start,
      end,
      duration,
      easing,
    });

    // const [refs, setRefs] = useState({ target:null, express:null, semi:null, custom:null, first:null, second:null, third:null, smartRef:null,
    //   blogAssistWriting:null,
    //   yoastSEO:null,
    //   websiteHiperlocal:null,
    //   socialManegement:null,
    //   showReviews:null,
    //   RSSToMailChimp:null,
    //   makeReservations:null,
    //   logoDesign:null,
    //   facebookChat:null,
    //   instagramFeed:null,
    //   customForms:null,
    //   clickMaps:null,
    //   adaProtect:null })
    const [refs, setRefs] = useState({ target:null, express:null, semi:null, custom:null, smartRef:null,
      blogAssistWriting:null,
      yoastSEO:null,
      websiteHiperlocal:null,
      socialManegement:null,
      showReviews:null,
      RSSToMailChimp:null,
      makeReservations:null,
      logoDesign:null,
      facebookChat:null,
      instagramFeed:null,
      customForms:null,
      clickMaps:null,
      adaProtect:null })
    
    
    useEffect(() => {

      if (start > 0 && start !== end && refs?.express !== null ) {

        // Desin Pack 
        if (refs.target.id == '1') {         
          refs.semi.current.classList.contains('active') && refs.semi.current.classList.remove('active') & onEffectChangePrice(-semiPrece) 
          refs.custom.current.classList.contains('active') && refs.custom.current.classList.remove('active') & onEffectChangePrice(-customPrece)
          
        }
        if (refs.target.id == '2') {
          refs.express.current.classList.contains('active') && refs.express.current.classList.remove('active') & onEffectChangePrice(-expressPrece)
          refs.custom.current.classList.contains('active') && refs.custom.current.classList.remove('active') & onEffectChangePrice(-customPrece)
          
        }
        if (refs.target.id == '3') {
          refs.semi.current.classList.contains('active') && refs.semi.current.classList.remove('active') & onEffectChangePrice(-semiPrece)
          refs.express.current.classList.contains('active') && refs.express.current.classList.remove('active') & onEffectChangePrice(-expressPrece)
          
        }
        
        // Page Content Writing
        // if (refs.target.id == '4') {         
        //   refs.second.current.classList.contains('active') && refs.second.current.classList.remove('active') & onEffectChangePrice(-100) 
        //   refs.third.current.classList.contains('active') && refs.third.current.classList.remove('active') & onEffectChangePrice(-300)
          
        // }
        // if (refs.target.id == '5') {
        //   refs.first.current.classList.contains('active') && refs.first.current.classList.remove('active') & onEffectChangePrice(-10)
        //   refs.third.current.classList.contains('active') && refs.third.current.classList.remove('active') & onEffectChangePrice(-300)
          
        // }
        // if (refs.target.id == '6') {
        //   refs.first.current.classList.contains('active') && refs.first.current.classList.remove('active') & onEffectChangePrice(-10)
        //   refs.second.current.classList.contains('active') && refs.second.current.classList.remove('active') & onEffectChangePrice(-100)
          
        // }
   
        
      }
    }, [refs, end])

    
    
    
    const onAddCategory = ( {target}, num ) => { 
        if (target.classList.contains('active')) {
          onChangePrice(-num)
        } else {
          onChangePrice(num)
        }
        
        target.classList.toggle('active');
        return;
    }
    
    
    const desinPack = ( {target}, num, express, semi, custom ) => {
    // const desinPack = ( {target}, num, express, semi, custom, first, second, third ) => {
      setRefs({ ...refs, target, express, semi, custom })
      // setRefs({ ...refs, target, express, semi, custom, first, second, third })
      if (target.classList.contains('active')) {
        onChangePrice(-num)
      } else {
        onChangePrice(num)
      } 
      
      target.classList.toggle('active');
      return;   
    }

    // const pageContentWriting = ( {target}, num, first, second, third, express, semi, custom ) => {
    //   setRefs({ ...refs, target, first, second, third, express, semi, custom })
    //   if (target.classList.contains('active')) {
    //     onChangePrice(-num)
    //   } else {
    //     onChangePrice(num)
    //   } 
      
    //   target.classList.toggle('active');
    //   return;   
    // }



    const onChangePrice = (num) => {
      setEnd( end + num )
      setStart( end )
      reset(true)
      
    }

    const onEffectChangePrice = (num) => {
      setEnd( end + num )
      reset(true)  
    }


    // const [smartIndex, setSmartIndex] = useState(false)

    const saveRefs = (smartRef, blogAssistWriting, yoastSEO, websiteHiperlocal, socialManegement, showReviews, RSSToMailChimp, makeReservations, logoDesign, facebookChat, instagramFeed, customForms, clickMaps, adaProtect) =>{

      setRefs( {...refs , smartRef,
        blogAssistWriting,
        yoastSEO,
        websiteHiperlocal,
        socialManegement,
        showReviews,
        RSSToMailChimp,
        makeReservations,
        logoDesign,
        facebookChat,
        instagramFeed,
        customForms,
        clickMaps,
        adaProtect })

    }


    return{
        setUpCount: value,
        SetUpCategory: onAddCategory,
        DesinPack: desinPack,
        // PageContentWriting: pageContentWriting,
        refs,
        saveRefs,
        desingPrece,
        end
    }
}