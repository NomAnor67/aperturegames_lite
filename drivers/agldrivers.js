       function changeBackground(selectElement) {
            const selectedColor = selectElement.value;
            document.body.style.backgroundColor = selectedColor;
            document.querySelector('header').style.backgroundColor = selectedColor;
        }

        window.addEventListener('DOMContentLoaded', function() {
            const themeSelector = document.getElementById('colorSelect');
            if (themeSelector) {
                changeBackground(themeSelector);
            }
        });
        function retractHeader() {
            document.querySelector('header').classList.add('retracted');
            document.getElementById('showHeaderBtn').style.display = 'block';
            document.getElementById('retractHeaderBtn').style.display = 'none';
        }
        function showHeader() {
            document.querySelector('header').classList.remove('retracted');
            document.getElementById('showHeaderBtn').style.display = 'none';
            document.getElementById('retractHeaderBtn').style.display = 'inline-block';
        }
        function openCenteredPopup() {
            let overlay = document.getElementById('patchPopupOverlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'patchPopupOverlay';
                overlay.className = 'popup-overlay';
                overlay.innerHTML = `
                    <div class="popup-content">
                        <button class="popup-close" onclick="closePatchPopup(event)">Close</button>
                        <div class="centered">
                            <h1>Patch Notes - v1.0 (Latest)</h1>
                            <pre>INITIAL C0MMIT</pre>
                        
                        </div>
                    </div>`;
                overlay.addEventListener('click', closePatchPopup);
                overlay.querySelector('.popup-content').addEventListener('click', function(event) {
                    event.stopPropagation();
                });
                document.body.appendChild(overlay);
            }
            overlay.style.display = 'flex';
        }

        function closePatchPopup(event) {
            event.stopPropagation();
            const overlay = document.getElementById('patchPopupOverlay');
            if (overlay) {
                overlay.style.display = 'none';
            }
        }
        function changeBackground(selectElement) {
            const selectedColor = selectElement.value;
            document.body.style.backgroundColor = selectedColor;
        }
        function retractHeader() {
            document.querySelector('header').classList.add('retracted');
            document.getElementById('HeaderBtn').style.display = 'block';
            document.getElementById('retractHeaderBtn').style.display = 'none';
        }
        function showHeader() {
            document.querySelector('header').classList.remove('retracted');
            document.getElementById('HeaderBtn').style.display = 'none';
            document.getElementById('retractHeaderBtn').style.display = 'inline-block';
        }