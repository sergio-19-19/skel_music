import { browser, element, by} from 'protractor';

describe('prueba e2e checho mostrar por defectos tab 1 y tab 2 ',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });
    // Prueba 1
    it("El tab 1 se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });
    // Prueba 2
    it("El usuario puede navegar a la pestaña Tab 2",async ()=>{
        await element(by.css("[tab=tab2]")).click();
        browser.driver.sleep(500);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 2");
    });
});
