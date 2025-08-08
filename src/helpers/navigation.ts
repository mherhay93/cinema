export function checkActivePath(path: string): boolean {
    const currentPath = window.location.pathname;
    return currentPath === path;
}
