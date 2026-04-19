/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "HF-MCP9700 Driver", "index.html", [
    [ "📚 Table of Contents", "index.html#autotoc_md1", null ],
    [ "📦 Overview", "index.html#autotoc_md2", [
      [ "🔀 Chip Compatibility", "index.html#autotoc_md3", null ]
    ] ],
    [ "✨ Features", "index.html#autotoc_md4", null ],
    [ "🚀 Quick Start", "index.html#autotoc_md5", null ],
    [ "🔧 Installation", "index.html#autotoc_md6", null ],
    [ "📖 API Reference", "index.html#autotoc_md7", null ],
    [ "📊 Examples", "index.html#autotoc_md8", null ],
    [ "📚 Documentation", "index.html#autotoc_md9", null ],
    [ "🔗 References", "index.html#autotoc_md10", null ],
    [ "🤝 Contributing", "index.html#autotoc_md11", null ],
    [ "📄 License", "index.html#autotoc_md12", null ],
    [ "API reference", "md_docs_2api__reference.html", [
      [ "hf::mcp9700::Mcp9700Thermistor<AdcType>", "md_docs_2api__reference.html#autotoc_md14", null ],
      [ "Adapter contract (AdcType)", "md_docs_2api__reference.html#autotoc_md15", null ],
      [ "Free functions", "md_docs_2api__reference.html#autotoc_md16", null ],
      [ "Namespace constants", "md_docs_2api__reference.html#autotoc_md17", null ],
      [ "Doxygen", "md_docs_2api__reference.html#autotoc_md18", null ]
    ] ],
    [ "CMake integration", "md_docs_2cmake__integration.html", [
      [ "Embedded in a larger project (HardFOC pattern)", "md_docs_2cmake__integration.html#autotoc_md20", null ],
      [ "Standalone interface library", "md_docs_2cmake__integration.html#autotoc_md21", null ],
      [ "Related", "md_docs_2cmake__integration.html#autotoc_md22", null ]
    ] ],
    [ "Examples", "md_docs_2examples.html", [
      [ "ESP32-C6 (examples/esp32)", "md_docs_2examples.html#autotoc_md29", [
        [ "Submodule", "md_docs_2examples.html#autotoc_md30", null ],
        [ "Example source", "md_docs_2examples.html#autotoc_md31", null ],
        [ "Full README", "md_docs_2examples.html#autotoc_md32", null ]
      ] ],
      [ "Other platforms", "md_docs_2examples.html#autotoc_md33", null ]
    ] ],
    [ "Hardware setup — ESP32-C6 (on-chip ADC)", "md_docs_2hardware__setup.html", [
      [ "Wiring diagram", "md_docs_2hardware__setup.html#autotoc_md35", null ],
      [ "ASCII reference (breadboard-friendly)", "md_docs_2hardware__setup.html#autotoc_md36", null ],
      [ "Pin table", "md_docs_2hardware__setup.html#autotoc_md37", null ],
      [ "ESP32-C6 ADC mapping (default example)", "md_docs_2hardware__setup.html#autotoc_md38", null ],
      [ "ESP-IDF references", "md_docs_2hardware__setup.html#autotoc_md39", null ],
      [ "Accuracy notes", "md_docs_2hardware__setup.html#autotoc_md40", null ]
    ] ],
    [ "HF-MCP9700 documentation", "md_docs_2index.html", [
      [ "Documentation structure", "md_docs_2index.html#autotoc_md42", [
        [ "Getting started", "md_docs_2index.html#autotoc_md43", null ],
        [ "Hardware & integration", "md_docs_2index.html#autotoc_md44", null ],
        [ "Reference & examples", "md_docs_2index.html#autotoc_md45", null ],
        [ "Manufacturer", "md_docs_2index.html#autotoc_md46", null ]
      ] ],
      [ "Visual overview", "md_docs_2index.html#autotoc_md47", null ]
    ] ],
    [ "Installation", "md_docs_2installation.html", [
      [ "Prerequisites", "md_docs_2installation.html#autotoc_md49", null ],
      [ "Obtain the source", "md_docs_2installation.html#autotoc_md50", null ],
      [ "Header-only layout", "md_docs_2installation.html#autotoc_md51", null ],
      [ "CMake (recommended)", "md_docs_2installation.html#autotoc_md52", null ],
      [ "Verify", "md_docs_2installation.html#autotoc_md53", null ]
    ] ],
    [ "Quick start", "md_docs_2quickstart.html", [
      [ "Implement the adapter contract", "md_docs_2quickstart.html#autotoc_md55", null ],
      [ "Construct the driver", "md_docs_2quickstart.html#autotoc_md56", null ],
      [ "Initialize and read", "md_docs_2quickstart.html#autotoc_md57", null ],
      [ "Optional calibration", "md_docs_2quickstart.html#autotoc_md58", null ],
      [ "Source excerpt (reference)", "md_docs_2quickstart.html#autotoc_md59", null ]
    ] ],
    [ "Transfer function", "md_docs_2transfer__function.html", [
      [ "Typical curve (illustration)", "md_docs_2transfer__function.html#autotoc_md61", null ],
      [ "Numerical examples (typical model)", "md_docs_2transfer__function.html#autotoc_md62", null ],
      [ "Signal processing path", "md_docs_2transfer__function.html#autotoc_md63", null ],
      [ "Related", "md_docs_2transfer__function.html#autotoc_md64", null ]
    ] ],
    [ "Troubleshooting", "md_docs_2troubleshooting.html", [
      [ "mcp9700_version.h not found", "md_docs_2troubleshooting.html#autotoc_md66", null ],
      [ "Temperature clearly wrong", "md_docs_2troubleshooting.html#autotoc_md67", null ],
      [ "ReadChannelV always fails", "md_docs_2troubleshooting.html#autotoc_md68", null ],
      [ "CI / docs link check", "md_docs_2troubleshooting.html#autotoc_md69", null ],
      [ "Still stuck?", "md_docs_2troubleshooting.html#autotoc_md70", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Functions", "functions_func.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';