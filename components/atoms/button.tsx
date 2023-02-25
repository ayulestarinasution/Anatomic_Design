export default function Button({customClass,size, padding, weight, background, color, margin, border, value}){
    return <button 
    className={customClass}
    style={{background:background,
         color:color,
        fontSize:size, fontWeight:weight,
          margin:margin, 
          padding:padding,
          border:border}}
    >{value}</button>
}