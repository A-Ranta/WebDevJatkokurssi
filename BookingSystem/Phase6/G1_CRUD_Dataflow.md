# 1️⃣ CREATE – Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Submit form
    F->>F: Client-side validation
    F->>B: POST /api/resources (JSON)

    B->>V: Validate request
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation message
    else Validation OK
        B->>S: create Resource(data)
        S->>DB: INSERT INTO resources
        DB-->>S: Result / Duplicate error

        alt Duplicate
            S-->>B: Duplicate detected
            B-->>F: 409 Conflict
            F-->>U: Show duplicate message
        else Success
            S-->>B: Created resource
            B-->>F: 201 Created
            F-->>U: Show success message
        end
    end
```

# 2️⃣ READ — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    U->>F: Lue lomakeresurssi
    F->>B: GET /api/resources (JSON)
    B->>S: Read/Lue resource
    S->>DB: SELECT * FROM resources WHERE...
    DB-->>S: lue resurssi

    alt Resurssi löytyy
        S-->>B: Resource data
        B-->>F: 200 OK
        F-->>U: Näytä resurssi
    else Resurssia ei löydy
        S-->>B: Not found
        B-->>F: 404 Not Found
        F-->>U: Näytä virheviestiresource not found
    end
```

# 3️⃣ UPDATE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    Note over U,F: Käyttäjä päivittää lomakeresurssin tietoja PUT             http://localhost:5000/api/resources/8 (id numero tietokannassa)

    U->>F: Päivitä lomake
    F->>F: selain/asiakaspuolen validointi
    F->>B: PUT /api/resources/(id) (JSON)

    B->>V: backend validointi
    V-->>B: backend validoinnin tulos

    alt Validointi epäonnistuu
        B-->>F: 400 Bad Request
        F-->>U: Näytä validointivirhe
    else Validointi OK
        B->>S: updateResource(id, data)
        S->>DB: UPDATE resources WHERE...
        DB-->>S: Update succesful viesti

        alt Duplicate resurssi nimi
            S-->>B: Duplicate resurssi
            B-->>F: 409 Conflict
            F-->>U: Näytä duplicate-virhe
        else Päivitys onnistuu
            S-->>B: päivitä resurssi
            B-->>F: 200 OK
            F-->>U: Näytä päivitetty resurssi
        end
    end
```

# 4️⃣ DELETE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js and resources.js)
    participant B as Backend (Express Route)
    participant V as express-validator
    participant S as Resource Service
    participant DB as PostgreSQL

    Note over U,F: Käyttäjä poistaa lomakeresurssin (DELETE http://localhost:5000/api/resources/10 (id numero tietokannassa/taulukossa)
    U->>F: Poista lomakeresurssi
    F->>B: DELETE /api/resources/{id}

    B->>S: deleteResource(id)
    S->>DB: DELETE FROM resources
    DB-->>S: Delete lopputulos

    alt Poisto onnistuu
        S-->>B: Deleted resource
        B-->>F: 204 No Content
        F-->>U: Näytä poistoviesti
    else Poisto epäonnistuu
        S-->>B: Error
        B-->>F: 400 Bad Request
        F-->>U: Näytä virheviesti
    end
```
