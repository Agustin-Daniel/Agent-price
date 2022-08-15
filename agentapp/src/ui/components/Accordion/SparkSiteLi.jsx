import { Collapse, Text } from '@nextui-org/react';

export const SparkSiteLi = ({css}) => {
  return (
    <Collapse 
    css={ css.collapseCss }
    title={<Text css={ css.togleCss }><img className='svg-check' src='../img/svg-check.png'/>Font Site</Text>}
    >
      <Text css={ css.textCss }>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Font Page Templates</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Font Blocks</span></li>
      </Text>
    </Collapse> 
  )
}
