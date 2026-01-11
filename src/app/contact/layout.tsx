
export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
})  {
    return (
        <div>
            <h1> This is page component </h1>
            {children}
        </div>
    );
};
