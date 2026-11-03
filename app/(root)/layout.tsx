// export default function RootLayout({
//     children
// }: Readonly<{
//     children: React.ReactNode
// }>) {
export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <main>
            SIDEBAR
            {children}
        </main>
    );
}
