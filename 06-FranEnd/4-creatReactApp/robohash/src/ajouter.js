export default function ajouter({handleAddCard}){
    return(
        <form className="addCrad" onSubmit={handleAddCard}>
        <div>
        <label>Name</label>
        <input type="text" placeholder="name"/>
        <label>Name</label>
        <input type="email" placeholder="email"/>
        <button>onSubmit</button>
        </div>
        </form>
    ) ;
}