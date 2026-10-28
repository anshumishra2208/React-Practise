import React, { useRef } from 'react'

function Uncontrolled() {

    const nameRef = useRef(null)

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData));
        console.log(nameRef.current.value);
    }

    return (

        <>
            <form action="" onSubmit={submit}>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" id="name" ref={nameRef} />

                <label htmlFor="">Email: </label>
                <input type="text" name="Email" id="Email" />

                <label htmlFor="">Password: </label>
                <input type="Password" name="Password" id="Password" />
                <button>submit</button>

            </form>


        </>
    )
}

export default Uncontrolled