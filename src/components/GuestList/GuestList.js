function GuestList( props ) {
    console.log('My props are:', props);
    return (
        <>
        <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map(guest => (
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    )
}

export default GuestList;