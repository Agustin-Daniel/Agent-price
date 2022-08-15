import { useState } from "react";
import { useCountUp } from 'use-count-up'




export const MonthPreceApp = () => {

    const [start, setStart] = useState(56);
    const [end, setEnd] = useState(56);
    const [duration, setDuration] = useState(1);
    const [easing, setEasing] = useState("easeOutCubic");
    // const [decimalPlaces, setDdecimalPlaces] = useState(0);
    // const [thousandsSeparator, setThousandsSeparator] = useState("");
    // const [decimalSeparator, setDecimalSeparator] = useState("");

    const { value, reset } = useCountUp({
      isCounting: true,
      start,
      end,
      duration,
      easing,
      // decimalPlaces,
      // thousandsSeparator,
      // decimalSeparator
    });

    const onAddCategory = ({target}, num) => {
        target.classList.contains('active') ? onChangePrice(-num) : onChangePrice(num);
        target.classList.toggle("active");
        return;
      }

      const onChangePrice = (num) => {
        setEnd( end + num );   
        reset(true);

        setStart( end );
      }

    return{
        monthCount: value,
        MonthCategory: onAddCategory,
    }
}