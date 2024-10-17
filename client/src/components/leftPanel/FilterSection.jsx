export function FilterSection() {
    const categories = 
    
       ['Laptop',
        'Gaming',
        'Storange',
        'Component',
        'Printers',
        'Scanner']
    return (
        <div>
            <div>
                {categories.map((category) => (
                    <button key={category}>{category}</button>))}
            </div>
            <div>
                <button>Clear Filter</button>
            </div>
      </div>
    );
}