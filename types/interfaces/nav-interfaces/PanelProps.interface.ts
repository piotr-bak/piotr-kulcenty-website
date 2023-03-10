export interface PanelProps {
    items: React.ReactNode[];
    layout: "navbarStyle" | "footerStyle";
    children?: React.ReactNode;
}
