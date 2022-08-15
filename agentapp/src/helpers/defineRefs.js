import { useRef } from "react"

export function defineRefs() {
    const express = useRef()
    const semi = useRef()
    const custom = useRef()

    // Page Content Writing Refs
    // const first = useRef()
    // const second = useRef()
    // const third = useRef()

    // Addons Refs
    const smartRef = useRef()
    const blogAssistWriting = useRef()
    const yoastSEO = useRef()
    const websiteHiperlocal = useRef()
    const socialManegement = useRef()
    const showReviews = useRef()
    const RSSToMailChimp = useRef()
    const makeReservations = useRef()
    const logoDesign = useRef()
    const facebookChat = useRef()
    const instagramFeed = useRef()
    const customForms = useRef()
    const clickMaps = useRef()
    const adaProtect = useRef()
    return { smartRef, blogAssistWriting, yoastSEO, websiteHiperlocal, socialManegement, showReviews, RSSToMailChimp, makeReservations, logoDesign, facebookChat, instagramFeed, customForms, clickMaps, adaProtect, express, semi, custom }
    // return { smartRef, blogAssistWriting, yoastSEO, websiteHiperlocal, socialManegement, showReviews, RSSToMailChimp, makeReservations, logoDesign, facebookChat, instagramFeed, customForms, clickMaps, adaProtect, express, semi, custom, first, second, third }
}