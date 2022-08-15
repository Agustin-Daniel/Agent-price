import { Collapse, Text } from '@nextui-org/react';
import { ToogleAddonsLi } from './ToogleAddonsLi';


export const ToogleAddons = ({css, refs}) => {


  return (
    <Collapse
    css={ css.collapseCss }
    title={<Text css={ css.togleCss }><img className='svg-check' src='../img/svg-check.png'/>Featured Addons</Text>}
    >
      <Text css={ css.textCss }>
        {/* ADA Protect */}
        {refs?.adaProtect !== null && refs.adaProtect.current.classList.contains('active') && <ToogleAddonsLi content={'ADA Protect'} />}

      
        {refs?.clickMaps !== null && refs.clickMaps.current.classList.contains('active') && <ToogleAddonsLi content={'ClickMaps'} />}

        {/* Custom Forms */}
        {refs?.customForms !== null && refs.customForms.current.classList.contains('active') && <ToogleAddonsLi content={'Custom Forms'} />}

        {/* Facebook Chat */}
        {refs?.facebookChat !== null && refs.facebookChat.current.classList.contains('active') && <ToogleAddonsLi content={'Facebook Chat'} />}

        {/* Instagram Feed */}
        {refs?.instagramFeed !== null && refs.instagramFeed.current.classList.contains('active') && <ToogleAddonsLi content={'Instagram Feed'} />}

        {/* Logo Design */}
        {refs?.logoDesign !== null && refs.logoDesign.current.classList.contains('active') && <ToogleAddonsLi content={'Logo Design'} />}

        {/* Make Reservations */}
        {refs?.makeReservations !== null && refs.makeReservations.current.classList.contains('active') && <ToogleAddonsLi content={'Make Reservations'} />}

        {/* RSS To MailChimp */}
        {refs?.RSSToMailChimp !== null && refs.RSSToMailChimp.current.classList.contains('active') && <ToogleAddonsLi content={'RSS To MailChimp'} />}

        {/* Show Reviews */}
        {refs?.showReviews !== null && refs.showReviews.current.classList.contains('active') && <ToogleAddonsLi content={'Show Reviews'} />}

        {/* Smart Assist */}
        {refs?.smartRef !== null && refs.smartRef.current.classList.contains('active') && <ToogleAddonsLi content={'Smart Assist'} />}

        {/* Social Manegement */}
        {refs?.socialManegement !== null && refs.socialManegement.current.classList.contains('active') && <ToogleAddonsLi content={'Social Manegement'} />}

        {/* Website Hiperlocal */}
        {refs?.websiteHiperlocal !== null && refs.websiteHiperlocal.current.classList.contains('active') && <ToogleAddonsLi content={'Website Hiperlocal'} />}

        {/* Yoast SEO */}
        {refs?.yoastSEO !== null && refs.yoastSEO.current.classList.contains('active') && <ToogleAddonsLi content={'Yoast SEO'} />}

        {/* Blog Assist Writing */}
        {refs?.blogAssistWriting !== null && refs.blogAssistWriting.current.classList.contains('active') && <ToogleAddonsLi content={'Blog Assist Writing'} />}

      </Text>
    </Collapse>
  )
}
