function convertToSVG() {
  const cssBackgroundUrl = document.getElementById('cssBackground').value;
  const decodedSvg = decodeURIComponent(cssBackgroundUrl);
  const startIdx = decodedSvg.indexOf('<svg');
  const endIdx = decodedSvg.lastIndexOf('</svg>') + '</svg>'.length;
  const svgCode = decodedSvg.substring(startIdx, endIdx);

  document.getElementById('svgOutput').value = svgCode;

  // Update download link href attribute and show the download button
  const downloadLink = document.getElementById('downloadBtn');
  downloadLink.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgCode);
  downloadLink.style.display = 'inline-block';
}

function copyToClipboard() {
  const copyText = document.getElementById('svgOutput');
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy');
  alert('SVG code copied to clipboard!');}
