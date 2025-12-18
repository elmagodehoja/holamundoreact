
function List() {

    let items = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];

  return (
    <div>
        <ul class="list-group">
            {items.map((item) => (<li class="list-group-item" key={item}>{item}</li>))}
        </ul>
    </div>
    
  )
}

export default List
