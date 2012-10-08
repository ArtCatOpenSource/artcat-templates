function open_window_hw(url, height, width)     {
    width += 60;
    height += 80;
    var left = (screen.availWidth - width) / 2;
    var top = (screen.availHeight - height) / 2;

    window.open(""+url+"", "", "height="+height+",width="+width+",left="+left+",top="+top+",status=no,toolbar=no,menubar=no,location=no,scrollbars=yes");
}

function send_email(name,domain,title)  {
    var atsign ="&#64;";
    var m_a_i_l_t_o = "&#109;&#97;&#105;&#108;&#116;&#111;";
    var colon = "&#58;";
//    var expression = '<a href="' + m_a_i_l_t_o + colon + name + atsign + domain + '">' + name + atsign + domain + '</a>';
    var expression = '<a href="' + m_a_i_l_t_o + colon + name + atsign + domain + '">' + title + '</a>';
    document.write (expression);
}
