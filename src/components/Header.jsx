import { useMemo } from 'react';

export function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  substractQuantity,
  clearCart,
}) {
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const carTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 d-flex mt-5 align-items-start justify-content-end a">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="p-3 bg-white">
                {isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="table w-100">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((guitar) => (
                          <tr key={guitar.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${guitar.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td>{guitar.name}</td>
                            <td className="fw-bold">${guitar.price}</td>
                            <td className="gap-4 align-items-start flex">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => substractQuantity(guitar.id)}>
                                -
                              </button>
                              {guitar.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(guitar.id)}>
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(guitar.id)}>
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-end">
                      Total pagar: <span className="fw-bold">${carTotal}</span>
                    </p>
                  </>
                )}

                <button
                  className="mt-3 p-2 btn btn-dark w-100"
                  onClick={clearCart}>
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
