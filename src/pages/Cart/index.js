import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tr>
          <td>
            <img
              src="https://www.girafa.com.br/visao/default/img/produtos/cordas/guitarras/85549-1470666656-guitarra-stratocaster-yamaha-pacifica-012-black-com-22-trastes-3.jpg"
              alt=""
            />
          </td>
          <td>
            <strong>Tênis</strong>
            <span>R$129,90</span>
          </td>
          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="Number" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </div>
          </td>
          <td>
            <strong>R$258,80</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tr>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
