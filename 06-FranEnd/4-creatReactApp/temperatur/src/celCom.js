export default function celComp({val , handleChange}){
    return (
        <input
        className='form-control' type="text" placeholder="Celsius" onChange={handleChange}
        value={val}
        />
    );
}