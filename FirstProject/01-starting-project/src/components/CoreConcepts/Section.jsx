
export default function Section({ title, children, ...props }) { //this JS featured is called "Rest property". This syntax groups all remaining 
                                                                 // object properties into a new object (named "props" in this case)
    return (
            <section {...props}>
                <h2>{title}</h2>
                {children}
            </section>
    )
}