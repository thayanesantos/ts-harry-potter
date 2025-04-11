import HouseSelector from "../components/HouseSelector"

export default function Home() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to the Harry Potter App</h1>
            <p>Select your favorite house:</p>
            <HouseSelector />
        </div>
    )
}