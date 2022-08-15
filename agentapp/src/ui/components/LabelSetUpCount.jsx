




export const LabelSetUpCount = ({setUpCount}) => {
  return (
    <div className="setup-container"><span className="setup__sume">+</span>
        <span className="setup__dollar">$</span><span className="setup__value">
        { setUpCount }
        </span>
        <span className="setup__label"> setup fee</span>
    </div>
  )
}
