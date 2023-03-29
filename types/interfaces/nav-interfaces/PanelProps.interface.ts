export interface PanelProps {
    items: Array<React.ReactNode>;
    layout: "navbarStyle" | "footerStyle";
    children?: React.ReactNode;
}
