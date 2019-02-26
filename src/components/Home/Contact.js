import React from 'react';
import Title from '../Globals/Title';

export default function Contact() {
  return (
    <div>
      <section className='contact py-5'>
        <Title title='contact us' />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form action="https://formspree.io/rtinkham0408@gmail.com" method="POST">
              {/* name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  placeholder='Jane Doe'
                />
              </div>
              {/* email */}
              <div className="form-group">
                <label htmlFor="email">Email Adress</label>
                <input 
                  type='text'
                  className='form-control'
                  name='email'
                  id='email'
                  placeholder='email@email.com'
                />
              </div>
              {/* description */}
              <div className="form-group">
                <label htmlFor="description">Description/Comments</label>
                <textarea
                  name='description'
                  id='description'
                  className='form-control'
                  rows='5'
                  placeholder='add your description or comments here....'
                >
                </textarea>
              </div>
              {/* submit */}
              <button
                type='submit'
                className='btn btn-yellow btn-block text-capitalize mt-3'
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  )
}
