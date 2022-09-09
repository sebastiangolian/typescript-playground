export class Printer {

    plugins: Plugin[] = []

    addPlugin(plugin: Plugin) {
        this.plugins.push(plugin)
    }

    print(): string {
        const printerPlugin = this.plugins.find(plugin => plugin.type == 'PRINTER')
        if (printerPlugin) {
            return `${printerPlugin.options} print`
        }
        return 'black print'
    }
}

export type PluginType = "PRINTER" | "MONITOR" | "COMPUTER"

export interface Plugin {
    type: PluginType
    options: string
}


export class PrinterPluginColor implements Plugin {
    type: PluginType = "PRINTER"
    options: string =  'colorouful'
}