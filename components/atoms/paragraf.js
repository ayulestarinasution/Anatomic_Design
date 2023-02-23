export default function Paragraf({size, customClass, weight,  margin, color, value}){
    return (
    <>
    <p 
    className={customClass}
    style={{fontSize:size, fontWeight:weight,
    color:color,
    margin:margin}}>{value}</p>
    </>);
}