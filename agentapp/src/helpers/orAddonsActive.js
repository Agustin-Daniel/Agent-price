export const orAddonsActive = (refs) => {
    return true &&
      refs.adaProtect.current.classList.contains('active') ||
      refs.customForms.current.classList.contains('active') ||
      refs.facebookChat.current.classList.contains('active') ||
      refs.instagramFeed.current.classList.contains('active') ||
      refs.logoDesign.current.classList.contains('active') ||
      refs.makeReservations.current.classList.contains('active') ||
      refs.RSSToMailChimp.current.classList.contains('active') ||
      refs.showReviews.current.classList.contains('active') || 
      refs.smartRef.current.classList.contains('active') ||
      refs.socialManegement.current.classList.contains('active') ||
      refs.websiteHiperlocal.current.classList.contains('active') ||
      refs.yoastSEO.current.classList.contains('active') ||
      refs?.clickMaps.current.classList.contains('active') ||
      refs.blogAssistWriting.current.classList.contains('active')
      ;
  }