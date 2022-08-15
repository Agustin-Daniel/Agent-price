export function nextUiCss() {
    const togleCss = {
      fontFamily: "'Mulish', sans-serif",
      fontSize: '16px',
      fontWeight: "800",
      letterSpacing: "normal",
      display: "flex",
      alingContent: "center",
      color: "#333"
      // , lineHeight:"18px
    };

    const collapseCss = {
      background: "rgb(247,247,247)",
      padding: "15px 15px",
      marginTop: "20px",
    };

    const textCss = {
      fontSize: '14px',
      lineHeight: "28px",
      letterSpacing: "normal",
      // width: "242px"
    };
    return { textCss, collapseCss, togleCss };
  }