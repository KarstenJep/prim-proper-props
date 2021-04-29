function DinnerSupplies( props ) {
    console.log('My dinnersupplies props are:', props);
    return (
        <section>
            <h2>Dinner Supplies</h2>
            <div>
            Spoons: {props.length * 2}
            </div>
            <div>
            Forks: {props.length * 2}
            </div>
            <div>
            Knives: {props.length * 2}
            </div>
        </section>
    )
}

export default DinnerSupplies;