import { addItem, removeItem, getItem, editStock } from "@/lib/shop";

export default async function ShopApp() {
  const items = await getItem();

  return (
    <>
      <h1>Shop Inventory</h1>

      <h2>Add New Item</h2>

      <form action={addItem}>
        <input name="item_name" type="text" placeholder="Item name" required />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          min="0"
          required
        />

        <input
          name="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="Price"
          required
        />

        <button type="submit">Add Item</button>
      </form>

      <h2>Inventory</h2>

      {items.length === 0 ? (
        <p>No items in your inventory yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.item_name}</h3>

              <p>Quantity: {item.quantity}</p>

              <p>Price: €{item.price}</p>

              {/* Edit item */}
              <h4>Edit Item</h4>

              <form action={editStock.bind(null, item.id)}>
                <input
                  name="item_name"
                  type="text"
                  defaultValue={item.item_name}
                  placeholder="Item name"
                  required
                />

                <input
                  name="quantity"
                  type="number"
                  defaultValue={item.quantity}
                  min="0"
                  required
                />

                <input
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  defaultValue={item.price}
                  required
                />

                <button type="submit">Update Item</button>
              </form>

              <form action={removeItem.bind(null, item.id)}>
                <button type="submit">Delete Item</button>
              </form>

              <hr />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
