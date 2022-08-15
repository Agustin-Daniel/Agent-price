import { Collapse, Text } from '@nextui-org/react';

export const AgentFontToolsLi = ({css}) => {
  return (
    <Collapse
    css={ css.collapseCss }
    title={<Text css={ css.togleCss }><img className='svg-check' src='../img/svg-check.png'/>AgentFont Tools</Text>}
    >
      <Text css={ css.textCss }>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Branding page</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Engage CTA</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Statistics</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Catalogue</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Testimonials</span></li>
      </Text>
    </Collapse>
  )
}
