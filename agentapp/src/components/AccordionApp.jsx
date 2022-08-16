import { Collapse } from '@nextui-org/react';
import { orAddonsActive } from '../helpers';
import { ToogleAddons } from '../ui';

import { AgentFontToolsLi, SparkSiteLi, SupportLi, nextUiCss } from '../ui';




export const AccordionApp = ({refs}) => {

  const { textCss, collapseCss, togleCss } = nextUiCss();

  const toogleAddonsCss = {
    textCss, collapseCss, togleCss
  }

  // hola

  return(
    <>
    <Collapse.Group divider={false} >

      <SparkSiteLi css={toogleAddonsCss} />

      <AgentFontToolsLi css={toogleAddonsCss} />

      <SupportLi css={toogleAddonsCss} />

      {
        refs?.clickMaps !== null &&
        orAddonsActive(refs) && <ToogleAddons css={toogleAddonsCss} refs={refs} />
      }

    </Collapse.Group >
    </>
  )

}