import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from '@material-ui/icons'
import styled from 'styled-components'


const Icon = styled.div``;

function Products() {
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  )
}

export default Products
