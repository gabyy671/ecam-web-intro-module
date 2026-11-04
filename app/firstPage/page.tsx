
export default function MyFistPage(){
    return (
    <>
    <p className="">Ma première page !</p>
    <p>Deuxième ligne</p>
    <Card>
        <p>
            hello from card
        </p>
        <p>
            out!
        </p>
    </Card>
    </>
    )
}


function MyFirstComponent(){
    return (
        <p className="text-2xl"></p>
    )
}

function Card(props: {children: React.ReactNode}){
    return(
        <div className="bg-blue-100 rounded p-4 container shadow">
            {props.children}
        </div>
    )
}

function Hello(props:{name: string}){
    return (
        <p>
            Hello {props.name}
        </p>
    )
}
