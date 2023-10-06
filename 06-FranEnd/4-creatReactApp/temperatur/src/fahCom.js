export default function fehri({val , handleChange}){
    return (
        <input
        className='form-control'type="text" placeholder="Fahrenheit" onChange={handleChange}
        value={val}
    />
    );

}