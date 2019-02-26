import React, { Component, Fragment } from 'react';
import Title from '../Globals/Title';
import Img from 'gatsby-image';

const getCategories = items => { 
  let tempItems = items.map(items => { 
    return items.node.category
    
  });
  let tempCategories = new Set (tempItems);
  let categories = Array.from(tempCategories);
  categories = ['all', ...categories];
  return categories;
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }

  handleItems = category => { 
    let tempItems = [...this.state.items];
    if (category === 'all') { 
      this.setState(() => { 
        return {coffeeItems: tempItems}
      })
    } else {
      let items = tempItems.filter(({node}) => node.category === category);
      this.setState(() => {
        return {coffeeItems: items}
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className='menu py-5'>
          <div className="container">
          <Title title='best of our menu' />
          {/* Categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button 
                    type='button' 
                    key={index}
                    className='btn btn-yellow text-capitalize m-3'
                    onClick={() => {this.handleItems(category)}}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {/* Items */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  < Fragment key={node.id}>
                    <div  className='col-11 col-md-6 my-3 d-flex mx-auto'>
                      <div>
                        <Img fixed={node.image.fixed}/>
                      </div>
                      
                    {/* Item Text */}
                      <div className="flex-grow px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className='mb-0'>
                            <small>{node.title}</small>
                          </h6>
                          <h6 className='mb-0 text-yellow'>
                            <small>${node.price}</small>
                          </h6>
                        </div>
                          <p className='text-muted'>
                            <small>{node.description.description}</small>
                          </p>
                        </div>
                      </div>
                  </Fragment>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className='menu py-5'>
          <div className="container">
            <Title title='best of our menu' />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
    
  }
}

export default Menu;