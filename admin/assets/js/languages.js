jQuery(function(e){e(document).on("click",".jw-pagefactory-lang-btns .jw-pagefactory-btn-install, .jw-pagefactory-lang-btns .jw-pagefactory-btn-update",function(a){a.preventDefault();var s=e(this),l=s.closest("tr").data("language");e.ajax({type:"POST",url:pagefactory_base+"index.php?option=com_jwpagefactory&task=languages.install&language="+l,beforeSend:function(){s.html('<i class="fa fa-spinner fa-spin"></i> Installing...')},success:function(a){var l=e.parseJSON(a);l.success?(s.find("i").removeAttr("class"),s.html('<i class="fa fa-check"></i> Installed'),s.closest("tr").find(".installed-version").html('<span class="label label-success">'+l.version+"</span>"),setTimeout(function(){s.closest("tr").removeAttr("class").addClass("enabled update-updated")},500)):(s.find("i").removeAttr("class"),s.html('<i class="fa fa-exclamation-triangle"></i> error'),alert(l.message))}})})});