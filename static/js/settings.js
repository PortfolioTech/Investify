export const dev_url = "DEV31620240503";

export const prod_url = "../vues/investify.vue";

export const settings_page_url = "https://portfoliotech.github.io/investify/static/html/settings.html";

export function set_dev_url(url) {
    localStorage.setItem(dev_url, url);
}

export function get_dev_url() {
    return localStorage.getItem(dev_url);
}

export function delete_dev_url() {
    localStorage.removeItem(dev_url);
}

export function dev_mode(domain) {
    return !domain.includes('github') || get_dev_url();
}

export function prod_mode(domain) {
    return !dev_mode(domain);
}

export function dev_env_enabled(domain) {
    return domain.includes('github') && get_dev_url();
}