import { useState } from "react";
import { maxLength, z } from "zod";

//lisää tila palvelimen vastaukselle
/*  
const [apiResponse, setApiResponse] = useState(null);
const [loading, setLoading] = useState(false); 
*/

const orderSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long")
        .max(15, "Name can be at most 20 characters long"),

    email: z.email("Please enter a valid email address"),
    select: z.string().min(1, "Please select a game to rent"),
    checkbox: z.boolean().refine(val => val === true, {
        message: "Please accept the terms"
    }),
});

function OrderPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        select: "",
        checkbox: false,
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const result = orderSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {
                const fieldName = issue.path[0];
                fieldErrors[fieldName] = issue.message;
            });

            setErrors(fieldErrors);
            setSuccessMessage("");
            return;
        }

        setErrors({});
        setSuccessMessage("!!!Form submitted successfully!!!");

        console.log("Validated form data:", result.data);

    }

    //Päivitetty handleSubmit tietojen lähetykselle
    /*
        async function handleSubmit(event) {
  event.preventDefault();

  const result = orderSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors = {};

    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];
      fieldErrors[fieldName] = issue.message;
    });

    setErrors(fieldErrors);
    setSuccessMessage("");
    setApiResponse(null);
    return;
  }

  setErrors({});
  setSuccessMessage("");
  setLoading(true);

  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    const data = await response.json();

    setApiResponse(data);
    setSuccessMessage("Form submitted and sent to server successfully! 🎉");
  } catch (error) {
    console.error(error);
    setSuccessMessage("Something went wrong while sending data ❌");
  } finally {
    setLoading(false);
  }
}
  */

    //lomake
    return (
        <div className="text-center items-center bg-gray-300">
            <h1>Order Page</h1>
            <p>Please fill the form below</p>

            <form onSubmit={handleSubmit}>
                {/*nimi*/}
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                {/*email*/}
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                {/*dropdown lista peleille*/}
                <div>
                    <label htmlFor="games"></label>
                    <select
                        id="games"
                        name="select"
                        value={formData.select}
                        onChange={handleChange}
                        required>

                        <option className="disabled selected hidden"
                            value="">
                            Choose a game to rent
                        </option>
                        <option value="Tales Of Arise">Tales Of Arise</option>
                        <option value="Resident Evil 9 Requiem">Resident Evil 9 Requiem</option>
                        <option value="No Sleep For Kaname Date">No Sleep For Kaname Date</option>
                        <option value="Skate 3">Skate 3</option>
                        <option value="Monster Hunter World">Monster Hunter World</option>
                        <option value="Stellar Blade">Stellar Blade</option>
                    </select>
                    {errors.select && <p>{errors.select}</p>}
                </div>

                {/*checkbox*/}
                <div>
                    <label htmlFor="checkbox">
                        I accept the terms and conditions
                    </label>
                    <br />
                    <input
                        id="checkbox"
                        name="checkbox"
                        type="checkbox"
                        checked={formData.checkbox}
                        onChange={handleChange}
                        required
                    />
                    {errors.checkbox && <p>{errors.checkbox}</p>}
                </div>

                <button className="bg-zinc-600"
                    type="submit">Submit</button>
            </form>

            
            {/*Tailwind CSS tyylitys vastauksellle
            {loading && <p>Sending data... ⏳</p>}

            {apiResponse && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Server Response (Echo)</h2>

                    <div
                        style={{
                            background: "#1e1e1e",
                            color: "#ffffff",
                            padding: "15px",
                            borderRadius: "10px",
                            overflowX: "auto",
                        }}
                    >
                        <pre>{JSON.stringify(apiResponse.json, null, 2)}</pre>
                    </div>
                </div>
            )}
            */}

            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default OrderPage;