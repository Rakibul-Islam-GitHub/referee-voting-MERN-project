import React from 'react';
import Form from 'react-bootstrap/Form';
const RefereeProfile = () => {
    return (
        <div className='container ref-profile referee-container'>
            <div className="row my-5">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src="https://via.placeholder.com/265x260" alt="" />
                </div>
                <div className="col-md-6">
                    <div>
                    <h5>Referee name</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deserunt fugit, debitis nisi deleniti pariatur quaerat, expedita soluta ut autem possimus accusantium.</p>
                    </div>

                    <div className='stats mt-5'>
                        <div className="row col-12">
                        <div className="col-8">Age</div>
                        <div className="col-4">39</div>
                        </div>
                        <div className="row col-12">
                        <div className="col-8">Matches</div>
                        <div className="col-4">12</div>
                        </div>
                        <div className="row col-12">
                        <div className="col-8">Yellow cards</div>
                        <div className="col-4">3</div>
                        </div>
                        <div className="row col-12">
                        <div className="col-8">Red cards</div>
                        <div className="col-4">0</div>
                        </div>

                        <div className="row col-12">
                        <div className="col-8">Reviews</div>
                        <div className="col-4">4</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row review-section mt-5">
                <div className="col-md-6 review-list ">

                    <div className='single-review p-2'>
                        <h6>Name</h6>
                        <span>Rating</span> <br />
                        <span className='text-muted'>21 Nov 22</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicor sit amet consectetur adipisicing elit. Accusamus in rerum nihil!</p>
                    </div>

                </div>
                <div className="col-md-6">
                    <form >
                    

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Rating</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Choose here</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
      </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RefereeProfile;