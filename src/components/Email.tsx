import React from 'react';

function Email() {
    return (
        <form 
            action="https://gmail.us14.list-manage.com/subscribe/post" 
            method="POST" 
            className="email-form"
        >
            <label>Sign Up For Our Newsletter</label>
            <br />
            <div className="submit-form">
                <input 
                    type="email" 
                    name="EMAIL" 
                    placeholder="Email" 
                    required 
                />
                <button type="submit" id="email-form-btn">OK</button>
            </div>
            <input type="hidden" name="u" value="c509b35a7b3a54869e47e0015" />
            <input type="hidden" name="id" value="addbe62e85" />
        </form>
    );
}

export default Email;
