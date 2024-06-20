// This script handles the download of the resume file
document.getElementById('resume-link').addEventListener('click', function(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Avipriya_Ghosh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
