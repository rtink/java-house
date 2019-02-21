import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section>
      <div className="py-5">
        <div className="container">
          <Title title='our story'></Title>
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
              <p className="lead text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum, error quam et eius deserunt ducimus non voluptatem esse hic officiis doloribus, adipisci optio possimus, suscipit rem culpa voluptatum similique perspiciatis voluptate! Dolorum distinctio, asperiores illum deleniti libero quibusdam quos sequi ullam perferendis eligendi odio debitis ipsam repellat aspernatur recusandae modi earum doloribus, ex placeat minima animi ducimus? Aliquid accusantium et quae cupiditate modi, adipisci iure exercitationem. Ipsa nemo quo, ad eaque architecto ut aspernatur possimus quaerat quis dolorem praesentium dignissimos sunt consectetur magni totam maxime sequi distinctio enim labore animi voluptatum odio iste optio. Accusamus unde ut ab autem.
              </p>
              <Link to='/about/'>
                <button className='btn text-uppercase btn-yellow'>about</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
