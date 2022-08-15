import { Collapse, Text } from '@nextui-org/react';

export const SupportLi = ({css}) => {
  return (
    <Collapse
    css={ css.collapseCss }
    title={<Text css={ css.togleCss }><img className='svg-check' src='../img/svg-check.png'/>Support</Text>}
    >
      <Text css={ css.textCss }>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Site Training</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Live Chat Support</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Success Dashboard</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Marketplace</span></li>
        <li className='li-price'><span className='check-item'><img className='svg-littlecheck' src="../img/svg-littlecheck.png"/>Managed Hosting</span></li>
      </Text>
    </Collapse>
  )
}
